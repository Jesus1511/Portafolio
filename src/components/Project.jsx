import { useParams } from "react-router-dom"
import img1 from '../assets/deadpool.jpg'
import img2 from '../assets/pepsi.jpg'
import img3 from '../assets/cactus.jpg'

export const Project = () => {

    const {index} = useParams()

    const projects = [
        {
            name:"Paper Rock Scissor",
            img: img1,
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ad voluptatem, amet libero pariatur dolorum ipsam porro enim. Tempora commodi at tenetur minima, sit aliquid cum. Nemo rerum at corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eveniet exercitationem. Odit consectetur exercitationem commodi repellat rerum nostrum id iusto aspernatur ducimus nam officia, mollitia fuga provident, accusantium maiores dicta.",
        },
        {
            name:"Google Keeps Clone",
            img: img2,
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ad voluptatem, amet libero pariatur dolorum ipsam porro enim. Tempora commodi at tenetur minima, sit aliquid cum. Nemo rerum at corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eveniet exercitationem. Odit consectetur exercitationem commodi repellat rerum nostrum id iusto aspernatur ducimus nam officia, mollitia fuga provident, accusantium maiores dicta.",
        },
        {
            name:"Connect Four Game Vs IA",
            img: img3,
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ad voluptatem, amet libero pariatur dolorum ipsam porro enim. Tempora commodi at tenetur minima, sit aliquid cum. Nemo rerum at corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eveniet exercitationem. Odit consectetur exercitationem commodi repellat rerum nostrum id iusto aspernatur ducimus nam officia, mollitia fuga provident, accusantium maiores dicta.",
        }
    ]

  return (
    <div>
        <div className="lg:my-[70px]"> 
            <h2 className="text-center">{projects[index].name}</h2>
        </div>
        <div>
            <div className="flex flex-col items-center lg:flex-row lg:items-start justify-center">
                <img className="h-[300px] lg:h-[400px]" src={projects[index].img} alt="" />
                <p className="text-center w-[90%] leading-5 lg:w-[40%] lg:leading-[25px] px-[40px]">{projects[index].content}</p>
            </div>
            <div></div>
        </div>
    </div>   
  )
}
