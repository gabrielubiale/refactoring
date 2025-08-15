import './styles.scss'

export default function CodeBlock({codeToShow}) {
  console.log("codeToShow: ", codeToShow)
  return (
    <div className="code-container">
      <pre>
        <code>{codeToShow}</code>
      </pre>
    </div>
  );
}