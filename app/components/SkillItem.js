const SkillItem = ({ skillItem, isTechStack = false }) => {
  // Check if skillItem is defined and has the icon property
  if (!skillItem || !skillItem.icon) {
    return null; // or render a placeholder icon or text
  }

  return (
    <div className="flex items-center ring-2 ring-neutral-700 bg-neutral-900 rounded-sm p-2 pl-3">
      {skillItem.icon}{" "}
      <span
        className={`ml-2 text-neutral-400 text-selection hover:text-neutral-200 duration-150 ease-in-out cursor-pointer ${
          isTechStack ? "text-xs" : "text-sm"
        }`}
      >
        {skillItem.name}
      </span>
    </div>
  );
};

export default SkillItem;
