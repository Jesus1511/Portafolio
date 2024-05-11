import { useParams } from "react-router-dom"
import img1 from '../assets/deadpool.jpg'
import img2 from '../assets/pepsi.jpg'
import img3 from '../assets/cactus.jpg'

export const Project = () => {

    const {index} = useParams()

    const projects = [
        {
            name:"Project 1",
            img: img1,
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ad voluptatem, amet libero pariatur dolorum ipsam porro enim. Tempora commodi at tenetur minima, sit aliquid cum. Nemo rerum at corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eveniet exercitationem. Odit consectetur exercitationem commodi repellat rerum nostrum id iusto aspernatur ducimus nam officia, mollitia fuga provident, accusantium maiores dicta.",
        },
        {
            name:"Project 2",
            img: img2,
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ad voluptatem, amet libero pariatur dolorum ipsam porro enim. Tempora commodi at tenetur minima, sit aliquid cum. Nemo rerum at corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eveniet exercitationem. Odit consectetur exercitationem commodi repellat rerum nostrum id iusto aspernatur ducimus nam officia, mollitia fuga provident, accusantium maiores dicta.",
        },
        {
            name:"Project 3",
            img: img3,
            content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. In ad voluptatem, amet libero pariatur dolorum ipsam porro enim. Tempora commodi at tenetur minima, sit aliquid cum. Nemo rerum at corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, eveniet exercitationem. Odit consectetur exercitationem commodi repellat rerum nostrum id iusto aspernatur ducimus nam officia, mollitia fuga provident, accusantium maiores dicta.",
        }
    ]

  return (
    <div>
        <div>
            <h2>{projects[index].name}</h2>
        </div>
        <div>
            <div>
                <img src={projects[index].img} alt="" />
                <p>{projects[index].content}</p>
            </div>
            <div></div>
        </div>
    </div>   
  )
}
