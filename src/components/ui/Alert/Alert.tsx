import Link from "next/link"
import { FC, PropsWithChildren } from "react"
import { Icons } from "../Icons"

interface  SeeMoreAlert {
    seeMore: true,
    href: string
}


interface AlertProps {
    icon?: React.ReactNode
} 

export const Alert = ({ icon = <Icons.Logo />, children , ...props }: PropsWithChildren<AlertProps & (SeeMoreAlert | {})>) => {
    const seeMore = 'seeMore' in props 
    let link:React.ReactNode = ''
    if(seeMore && props.seeMore && props.href )  link = <Link href={ props.href }  className="text-sm font-bold border-b-2 w-fit  border-current">Learn More</Link>

    return (
        <div className="flex gap-4">
            <div className=" [&>*]:w-8 [&>*]:h-8">
                {icon}
            </div>
            <div className="flex gap-1 flex-col">
                {children}
                {link ?? link}
            </div>
        </div>
    )
}