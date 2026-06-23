export default function ProjectCard({ project }) {
  const {
    title,
    description,
    source,
    sourceIcon,
    icon,
    thumbnail,
    tags,
    linkLabel,
    linkUrl,
    isPlaceholder,
  } = project;

  return (
    <div className="project-card">
      <div
        className="project-thumb"
        style={
          thumbnail
            ? { backgroundImage: `url(${thumbnail})`, backgroundSize: "cover", backgroundPosition: "center" }
            : undefined
        }
      >
        {!thumbnail && <span className="project-thumb-icon">{icon}</span>}
        {isPlaceholder && <span className="project-placeholder-badge">Add thumbnail</span>}
      </div>
      <div className="project-body">
        <div className="project-source">
          <span>{sourceIcon}</span> {source}
        </div>
        <div className="project-title">{title}</div>
        <p className="project-desc">{description}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="project-links">
          <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="project-link">
            {linkLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
