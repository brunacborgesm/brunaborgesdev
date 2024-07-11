interface SoftSkillCardProps {
    title: string;
    description: string;
}

export const SoftSkillCard:React.FC<SoftSkillCardProps> = ({ title, description }) => {
  return (
    <div className="bg-transparent border border-cl-green rounded-xl flex w-60 h-60 flex-col text-center items-center p-5 cursor-pointer hover:animate-spin-y hover:bg-cl-lavander">
        <h2 className="text-2xl text-cl-green">{ title }</h2>
        <p className="text-cl-white">{ description }</p>
    </div>
  )
}
