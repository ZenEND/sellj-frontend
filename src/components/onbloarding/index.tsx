import React, {useCallback, useEffect, useMemo, useState} from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.module.scss';

interface OnboardingStep {
    content: React.ReactNode;
    targetRef: React.RefObject<HTMLElement>;
}

interface OnboardingProps {
    steps: OnboardingStep[];
    onFinish: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ steps, onFinish }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
    const targetStep = useMemo(() => steps[currentStep].targetRef, [currentStep, steps])

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const nextStep = useCallback(() => {
        if (currentStep < steps.length - 1) {
            if(targetStep.current) {
                targetStep.current.style.zIndex = '0'
            }
            setCurrentStep(currentStep + 1);
        } else {
            onFinish();
        }
    }, [currentStep, onFinish, steps.length, targetStep]);

    useEffect(() => {
        if (currentStep < steps.length) {
            if (targetStep.current) {
                targetStep.current.style.zIndex = '999';
                targetStep.current.scrollIntoView()
                // Calculate the desired position of the tooltip relative to the viewport
                const targetRect = targetStep.current?.getBoundingClientRect() as DOMRect;
                const desiredTop = targetRect.bottom + 10;
                const desiredLeft = targetRect.left + window.scrollX + targetRect.width / 2 - 100;

                setPosition({
                    top: desiredTop,
                    left: desiredLeft,
                });
            }
        }
    }, [currentStep, steps, targetStep]);

    // Add a scroll event listener to the document element
    // Event listener should be here because targetStep.current?.getBoundingClientRect return values before scroll
    useEffect(() => {
        document.addEventListener('scroll', () => {
            // Calculate the desired position of the tooltip relative to the viewport
            const targetRect = targetStep.current?.getBoundingClientRect() as DOMRect;
            const desiredTop = targetRect.bottom + 10;
            const desiredLeft = targetRect.left + window.scrollX + targetRect.width / 2 - 100;

            setPosition({
                top: desiredTop,
                left: desiredLeft,
            });
        });

        return () => {
            document.removeEventListener('scroll', () => {});
        };
    }, [targetStep]);

    return ReactDOM.createPortal(
        <div className={styles.container}>
            <div className={styles.shadow} />
            {currentStep < steps.length && (
                <div className={styles.tooltipContainer} style={{ top: position?.top, left: position?.left }}>
                    <div className={styles.tooltipContent}>
                        {steps[currentStep].content}
                        <button onClick={nextStep}>
                            {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
                        </button>
                    </div>
                </div>
            )}
        </div>,
        document.body
    );
};

export default Onboarding;
