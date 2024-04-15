export default function Button({children, ...props}) {
  return (
    <button
      className="px-4 py-2 text-xs md:text-base rounded-md hover:text-stone-100 hover:bg-stone-600 text-stone-400 bg-stone-700"
      {...props}
    >
      {children}
    </button>
  );
}