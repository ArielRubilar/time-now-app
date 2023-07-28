interface AvatarProps {
    src: string
    alt: string
    className?: string
}

export const Avatar = ({className , src , alt}: AvatarProps) => {

    return <img className={`rounded-full max-w-[5rem] w-full ${className}`}  src={src} alt={alt}/>
}