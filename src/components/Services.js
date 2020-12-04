import React, { Component } from 'react'
import Title from './Title';
import {FaCocktail,FaBeer,FaHiking,FaShuttleVan} from 
'react-icons/fa';

export default class Services extends Component {
    state = {
        services:[
            { icon:<FaCocktail />,
              title : "Free Concktail",
              info:  "Enim duis Lorem laboris velit ad cupid dolor cupidatat sunt enim deserunt culpa sit magna cillum velit." 
            },
            { icon:<FaShuttleVan />,
                title : "Free Shuttle",
                info:  "Enim duis Lorem laboris velit ad cupid dolor cupidatat sunt enim deserunt culpa sit magna cillum velit." 
              },
              { icon:<FaHiking />,
                title : "Endless Hiking",
                info:  "Enim duis Lorem laboris velit ad cupid dolor cupidatat sunt enim deserunt culpa sit magna cillum velit." 
              },
              { icon:<FaBeer />,
                title : "Chilled Beer",
                info:  "Enim duis Lorem laboris velit ad cupid dolor cupidatat sunt enim deserunt culpa sit magna cillum velit." 
              }
        ]
    }
    render() {

        return (
            <section className="services">
                <Title title="Services" />
                <div className="services-center">
                    {this.state.services.map((item,index) =>
                    {
                        return(
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                </div>

            </section>
                
            
        )
    }
}
