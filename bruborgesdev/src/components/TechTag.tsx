interface TechTagProps {
    tech: string;
}

export const TechTag:React.FC<TechTagProps> = ({ tech }) => {
    return (
        <div className="px-2 bg-cl-green text-cl-purple-2 rounded-md text-sm">
            <span>{ tech }</span>
        </div>
    )
}

