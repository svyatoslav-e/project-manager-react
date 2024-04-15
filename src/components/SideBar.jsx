import Button from "./Button";

export default function SideBar() {
  return ( 
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-sl text-stone-200">My Projects</h2>
      <div>
        <Button> 
           + Add Project
        </Button>
      </div> 
      <ul>
        <li></li>
      </ul>
    </aside>
  );
}
