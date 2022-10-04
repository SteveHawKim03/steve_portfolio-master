
const ProjectCard = (props) => {
  return (
    <div className="card border rounded-md p-2 bg-white w-[500px]">
        <div className="card__body">
            <img src={props.img} class="card__image" />
            <h2 className="card__title p-2 text-black">{props.title}</h2>
            <p className="card__description p-2 text-black">{props.description}</p>
        </div>
        <button className="card__btn border rounded-md m-2 p-2 text-black">Read More</button>
    </div>
  )
}

export default ProjectCard