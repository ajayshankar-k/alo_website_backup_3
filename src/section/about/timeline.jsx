import React, { Fragment } from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'

const TimeLine = () => {
    return (
        <Fragment>
            <div className="time-line-parent">
                <div className="time-line">
                    <h2>Our Journey</h2>
                    <h3>In code we trust, our journey never rusts</h3>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2023 - 2024"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path d="M46.875 18.3594C46.875 32.0312 26.6035 43.0977 25.7402 43.5547C25.5127 43.6771 25.2584 43.7412 25 43.7412C24.7416 43.7412 24.4873 43.6771 24.2598 43.5547C23.3965 43.0977 3.125 32.0312 3.125 18.3594C3.12862 15.1489 4.40559 12.0709 6.67575 9.80075C8.94592 7.53059 12.0239 6.25362 15.2344 6.25C19.2676 6.25 22.7988 7.98437 25 10.916C27.2012 7.98437 30.7324 6.25 34.7656 6.25C37.9761 6.25362 41.0541 7.53059 43.3242 9.80075C45.5944 12.0709 46.8714 15.1489 46.875 18.3594Z" fill="white" />
                                </svg>
                            }
                        >
                            <h4 className="vertical-timeline-element-title">Embracing a New Educational Journey and </h4>
                            <h5 className="vertical-timeline-element-subtitle">Software Development</h5>
                            <p>
                                As we step into 2023-2024, Alo Info-Tech is embarking on a new journey in education and software development. We are exploring opportunities to further enhance our contributions and achievements. The focus remains on innovation, growth, and pondering the limitless possibilities that lie ahead. This phase symbolizes our continuous commitment to progress and making a lasting impact in both the education and software domains.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2022 - 2023"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path d="M44.5672 37.2078C43.7579 36.4109 33.95 32.6172 32.1704 31.9015C30.4 31.1984 29.6938 29.25 29.6938 29.25C29.6938 29.25 28.8969 29.6906 28.8969 28.4531C28.8969 27.214 29.6938 29.25 30.4907 24.4719C30.4907 24.4719 32.7016 23.8515 32.2625 18.7219H31.7313C31.7313 18.7219 33.0594 13.2375 31.7313 11.3812C30.3985 9.52498 29.8766 8.28748 26.95 7.39998C24.0282 6.51404 25.0907 6.6906 22.9688 6.78123C20.8438 6.87029 19.075 8.02029 19.075 8.63748C19.075 8.63748 17.7469 8.72654 17.2188 9.25779C16.6875 9.78904 15.8032 12.264 15.8032 12.8828C15.8032 13.5015 16.2454 17.664 16.6875 18.5453L16.161 18.7172C15.7188 23.8484 17.9297 24.4703 17.9297 24.4703C18.7266 29.2484 19.5235 27.2125 19.5235 28.4515C19.5235 29.689 18.7266 29.2484 18.7266 29.2484C18.7266 29.2484 18.0188 31.1953 16.25 31.9C14.4813 32.6078 4.66254 36.4109 3.86411 37.2062C3.06723 38.0187 3.15629 41.7312 3.15629 41.7312H45.2719C45.2719 41.7312 45.3704 38.0156 44.5641 37.2047L44.5672 37.2078ZM34.6688 40.7234H27.5407V38.7703H34.6688V40.7234Z" fill="white" />
                                </svg>
                            }
                        >
                            <h4 className="vertical-timeline-element-title">Diversification and Commitment to</h4>
                            <h5 className="vertical-timeline-element-subtitle">Knowledge Sharing</h5>
                            <p>
                                The journey continued in 2022-2023 with the launch of two groundbreaking apps—FastX and Alo Invoice. These additions diversified our offerings, meeting evolving industry needs. In line with our commitment to knowledge sharing, we inaugurated a new office dedicated to a course institute. This move reflected our dedication to nurturing talent and contributing to the growth of the IT community.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2021 -2022"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <mask id="mask0_1431_185" maskUnits="userSpaceOnUse" x="2" y="2" width="44" height="44">
                                        <path d="M21.8751 39.5834C31.6553 39.5834 39.5834 31.6552 39.5834 21.875C39.5834 12.0948 31.6553 4.16669 21.8751 4.16669C12.0949 4.16669 4.16675 12.0948 4.16675 21.875C4.16675 31.6552 12.0949 39.5834 21.8751 39.5834Z" fill="white" stroke="white" stroke-width="4" stroke-linejoin="round" />
                                        <path d="M27.7678 14.9406C26.9948 14.1657 26.0763 13.5511 25.065 13.1323C24.0538 12.7134 22.9697 12.4985 21.8751 12.5C20.7806 12.4985 19.6965 12.7134 18.6852 13.1323C17.6739 13.5511 16.7554 14.1657 15.9824 14.9406" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M34.6064 34.6063L43.445 43.4448" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                                    </mask>
                                    <g mask="url(#mask0_1431_185)">
                                        <path d="M0 0H50V50H0V0Z" fill="white" />
                                    </g>
                                </svg>
                            }
                        >
                            <h4 className="vertical-timeline-element-title">Growing Together as a</h4>
                            <h5 className="vertical-timeline-element-subtitle">Software Family</h5>
                            <p>
                                Alo Info-Tech evolved into a close-knit family during 2021-2022. Our collective efforts and shared vision transformed challenges into opportunities, establishing us as a formidable presence in the software landscape. With dedication and expertise, we witnessed remarkable growth, and our success was further amplified by the launch of our applications, solidifying our position in the industry.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2020 - 2021"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <path d="M26.6969 6.97503C26.4781 6.74577 26.215 6.56328 25.9236 6.4386C25.6322 6.31392 25.3185 6.24963 25.0016 6.24963C24.6847 6.24963 24.371 6.31392 24.0796 6.4386C23.7882 6.56328 23.5251 6.74577 23.3063 6.97503L6.90003 24.1625C6.58311 24.4944 6.37057 24.9119 6.28877 25.3634C6.20696 25.815 6.25949 26.2805 6.43985 26.7025C6.6202 27.1244 6.92044 27.4841 7.30333 27.737C7.68622 27.9899 8.13492 28.1248 8.59379 28.125H12.5V40.625C12.5 41.4538 12.8293 42.2487 13.4153 42.8347C14.0014 43.4208 14.7962 43.75 15.625 43.75H18.75C19.5788 43.75 20.3737 43.4208 20.9597 42.8347C21.5458 42.2487 21.875 41.4538 21.875 40.625V37.5C21.875 36.6712 22.2043 35.8764 22.7903 35.2903C23.3764 34.7043 24.1712 34.375 25 34.375C25.8288 34.375 26.6237 34.7043 27.2097 35.2903C27.7958 35.8764 28.125 36.6712 28.125 37.5V40.625C28.125 41.4538 28.4543 42.2487 29.0403 42.8347C29.6264 43.4208 30.4212 43.75 31.25 43.75H34.375C35.2038 43.75 35.9987 43.4208 36.5847 42.8347C37.1708 42.2487 37.5 41.4538 37.5 40.625V28.125H41.4063C41.8654 28.1254 42.3145 27.9909 42.6979 27.7383C43.0813 27.4856 43.382 27.126 43.5627 26.7039C43.7435 26.2819 43.7963 25.816 43.7146 25.3642C43.6329 24.9124 43.4203 24.4946 43.1032 24.1625L26.6969 6.97503Z" fill="white" />
                                </svg>
                            }
                        >
                            <h4 className="vertical-timeline-element-title">Planting Seeds of Innovation</h4>
                            <h5 className="vertical-timeline-element-subtitle">Amidst Challenges</h5>
                            <p>
                                In January 2020, Alo Info-Tech emerged with a powerful vision during the tumultuous times of the COVID era. From our corporate office in Nagercoil, we embarked on a software journey filled with innovation. Despite the challenges, our dedication led to significant growth by December 2020. We began implementing innovative ideas, laying the foundation for a remarkable journey. This period marked a milestone as we secured projects, delved into product development, and proudly launched our own applications, showcasing our commitment to innovation and user-centric solutions.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                    <g clip-path="url(#clip0_1431_197)">
                                        <path d="M22.7499 5.975C22.9792 5.58158 23.3076 5.25515 23.7024 5.02828C24.0972 4.8014 24.5446 4.68201 24.9999 4.68201C25.4553 4.68201 25.9026 4.8014 26.2974 5.02828C26.6922 5.25515 27.0206 5.58158 27.2499 5.975L33.0728 15.9708L44.3812 18.4208C44.826 18.5175 45.2377 18.7291 45.5752 19.0344C45.9128 19.3398 46.1644 19.7284 46.305 20.1613C46.4456 20.5942 46.4703 21.0565 46.3765 21.5019C46.2828 21.9474 46.0739 22.3604 45.7707 22.7L38.0624 31.3271L39.2291 42.8375C39.2751 43.2907 39.2014 43.7481 39.0154 44.164C38.8294 44.5798 38.5375 44.9396 38.1689 45.2074C37.8004 45.4752 37.368 45.6416 36.915 45.69C36.462 45.7384 36.0042 45.6672 35.5874 45.4833L24.9999 40.8167L14.4124 45.4833C13.9956 45.6672 13.5378 45.7384 13.0848 45.69C12.6318 45.6416 12.1995 45.4752 11.8309 45.2074C11.4623 44.9396 11.1705 44.5798 10.9844 44.164C10.7984 43.7481 10.7247 43.2907 10.7707 42.8375L11.9374 31.3271L4.22907 22.7021C3.92538 22.3626 3.71607 21.9493 3.62202 21.5036C3.52797 21.0579 3.55249 20.5953 3.69312 20.162C3.83376 19.7287 4.08558 19.3399 4.42346 19.0344C4.76134 18.7288 5.17346 18.5173 5.61866 18.4208L16.927 15.9708L22.7499 5.975Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1431_197">
                                            <rect width="50" height="50" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            }
                        />
                    </VerticalTimeline>
                </div>
            </div>
        </Fragment>
    )
}
export default TimeLine