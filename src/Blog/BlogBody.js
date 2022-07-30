import React from 'react'
import './BlogBody.css'
import photo from './photo.png'

function BlogBody() {
    return (
        <div className="blogbody">
            <div className="blog-heading">
                <h1>Blog</h1>
            </div>
            <div className="blogbody-content">
                <div className="blog-post">
                    <div className="blog-post-img">
                        <img src={photo} style={{ height: '100%', width: '100%' }} />
                    </div>
                    <div className="blog-post-info">
                        <div className="blog-post-info-date">
                            February 22, 2022
                        </div>
                        <div className="blog-post-info-name">
                            Keith W. Crawford
                        </div>
                        <div className="blog-post-info-info">
                            ARE YOU THINKING OF THE ‘RIGHT PROBLEM’ TO SOLVE?

                            It is quite tempting to embark upon the next great idea but so many individuals fail with sloppy operations and no clear objective or framework. To truly taste success, the foremost step is to address an appropriate problem to solve.

                            Early in the ideation exercise, more essential than anything is finding out through tests to confirm that there is an issue worth solving. As well as scrutinize where a product or service may be most effective in solving the problem. Even though instincts and personal experiences can be a powerful indicator that there actually is a problem to solve, without thorough research it is tough to determine if you have a conquering solution. For instance, Airbnb started out when its founders Brian Chesky and Joe Gebbia, saw two difficulties in the same industry. One, they were having difficulty paying rent in New York and two, almost all of the city’s hotel rooms were consistently occupied. They identified two major problems and designed a solution to address both of them at the same time.

                            Here’s how to check on your befitting ideas :

                            Prototype Testing
                            The most effective method to confirm that an issue exists is to immerse oneself in the process and learn by doing. The tests incline towards solution building, but the goal is to acquire clarity on the problem and the client running them without constructing anything or developing very little.

                            Breadth of Demographics
                            The product you are designing might be required by a whole lot of population across the globe or maybe it has a specific target audience. Factors like geography, age, income level, etc., may or may not influence user acceptance but you won’t know unless you test it out. How a 15 year old uses a product can be quite different from a 40 year old (like Facebook). Also, if you don’t test diverse demographics, you can lose out on an audience that needs the product the most.

                            Know your Enemies
                            Once you have identified your problem, chances are that someone has attempted to address the issue. Research on companies that failed to solve the problem and why they failed. Was it that their price was out of range? Did the idea come too soon, even before there was enough demand? This information can be utilized to avoid similar complications and work through expanding the business.
                            And if there are active competitors, take a close look at what they have to offer and compare where you outshine them and where they fall short.

                            Expert Testing
                            You might not be having enough expertise in the product you are developing so seeking out experts and customers who can help you through their observations and experience in a space can be quite insightful. Organizing an event where you inform about your product at the same time connecting with professionals who can foster and counsel your product can be a great start.

                            Market-product fit rather than product-market fit
                            The first one entails identifying a popular market and designing a product to profit on it. This strategy inevitably involves introducing more of the same to an already crowded market. The latter starts with defining a need in the target market and creating a product or service to meet that need. In this circumstance, either the answer does not exist thus the necessity or it has not been enhanced.

                            Overpromising
                            Make sure not to make unrealistic promises about outcomes that are not yet backed up by technology. When we look back at many failed technology startup stories, it’s quite easy to spot red flags that were overlooked by a lot of smart people during that time.

                            The number of steps might seem daunting but if you break them down into small targets and address each one of them to acquire a strong idea, you will be on to a successful launch of your startup. Finally, the most pivotal entrepreneurial activity is to take action and adjust your product or service as you go.


                            — Soumya Bhartiya

                        </div>
                        <div className="blog-post">
                            <div className="blog-post-img">
                                <img src={photo} style={{ height: '100%', width: '100%' }} />
                            </div>
                            <div className="blog-post-info">
                                <div className="blog-post-info-date">
                                    February 22, 2022
                                </div>
                                <div className="blog-post-info-name">
                                    Keith W. Crawford
                                </div>
                                <div className="blog-post-info-info">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
             
                );
            }


export default BlogBody;     
