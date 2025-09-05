export default function UserStoryCard ({ role, action, benefit }) {
    return (<div className="p-4 border-l-4 border-blue-500 bg-blue-50 my-4 not-prose">
        <p className="font-mono text-sm">
            <span className="text-gray-500">En tant que </span>
            <strong className="text-blue-800">{role}</strong>,
            <span className="text-gray-500"> je veux </span>
            <strong className="text-blue-800">{action}</strong>,
            <span className="text-gray-500"> afin de </span>
            <strong className="text-blue-800">{benefit}</strong>.
        </p>
    </div>
)};