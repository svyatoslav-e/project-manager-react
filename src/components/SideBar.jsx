import Button from "./Button";

export default function SideBar({
  onStartAddProject,
  onSelectProject,
  projects,
  selectedProjectId
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-sl text-stone-200">
        My Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if ( selectedProjectId === project.id ) {
            cssClasses += ' bg-stone-800 text-stone-200'
          } else {
            cssClasses += ' text-sone-400'
          }

          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  );
}
