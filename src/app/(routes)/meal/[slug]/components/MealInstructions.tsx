export const MealInstructions = ({
  instructions,
}: {
  instructions: string;
}) => {
  const instructionsArray = instructions.split(/\r\n/);

  return (
    <div className="">
      <h2 className="text-sm font-bold">Instructions</h2>
      {instructionsArray.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  );
};
