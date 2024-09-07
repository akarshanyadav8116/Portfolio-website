// eslint-disable-next-line react/prop-types
const SkillCard = ({id,url,alter}) => {
  return (
    <>
        <div className={`size-32 ${ id === 8 ? 'bg-white':null } border-2 p-3 border-cyan-400 border-opacity-65 shadow-xl shadow-cyan-400 rounded-2xl animate-wobble`}>
            <img src={url} alt={alter} />
        </div>
    </>
  );
};

export default SkillCard;
