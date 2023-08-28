import { Card} from "antd";
import {PropsWithChildren, ReactNode} from "react";
import styles from './styles.module.scss'
import cn from 'classnames'
interface CardUI {
    title: string | number
    className?: string
    actions?: ReactNode[]
}
export const CardUI = ({children, title, className, actions}: PropsWithChildren<CardUI>) => {
    return (
        <Card className={cn(styles.card, className)} title={title} rootClassName={styles.card} actions={actions}>
            {children}
        </Card>
    )
}