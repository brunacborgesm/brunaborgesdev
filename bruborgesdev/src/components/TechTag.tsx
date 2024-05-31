interface TechTagProps {
    tech: string;
}

export const TechTag:React.FC<TechTagProps> = ({ tech }) => {
    return (
        <div className="py-1 px-3 bg-cl-green text-cl-purple-2 rounded-md">
            <span>{ tech }</span>
        </div>
    )
}

