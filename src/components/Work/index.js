import React,{Component} from 'react'
import axios from 'axios'
import { Worke, WorkTitle, TitleSpan, WorkPart, WorkIcon, PartDesc, PartLine } from './style'

class Work extends Component {
    state = {
        works: []
    }
    componentDidMount() {
        axios.get('js/data.json').then(res => { this.setState({ works :res.data.works}) })
    }
    render() {

        const {works} =this.state;
        const worksList = works.map((workItem)=>{
            return(
                <WorkPart first={workItem.id} key={workItem.id}>
                        <WorkIcon className={workItem.icon_name}></WorkIcon>
                        <PartDesc>{workItem.title}</PartDesc>
                        <PartLine />
                        <PartDesc>
                    </PartDesc>
                    {workItem.body}
                    </WorkPart>
            )
        })

        return (
            <Worke>
                <div className="container">
                    <WorkTitle><TitleSpan>My</TitleSpan> Work</WorkTitle>
                   {worksList}

                </div>
            </Worke>
        )
    }
}
export default Work;