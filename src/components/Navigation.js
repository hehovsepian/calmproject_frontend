import React, {useState, useEffect, useRef} from 'react';
import {connect} from "react-redux";
import { NavLink } from 'react-router-dom'

function Navigation(props) {

    const navRef = useRef(null)

    const toggleNavigation = () => {
        if(window.innerWidth < 768){
            if(navRef.current.classList.contains('show-navigation')){
                navRef.current.classList.remove('show-navigation')
            }else{
                navRef.current.classList.add('show-navigation')
            }
        }
    }

    return (
        <div className="navigation" ref={navRef}>
            <div>
                <svg  className='logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 102 40"><path d="M6.502 9.19a30.605 30.605 0 0 0-3.921 6.42C1.523 17.954.726 20.47.304 23.083-1.72 37.425 6.961 39.706 8.441 39.985c7.609.891 13.212-3.272 15.86-5.826.956 4.787 5.716 4.845 7.803 2.683.533-.551.959-1.229 1.29-1.934 1.238 4.524 5.203 2.983 5.67 2.783 2.21-.833 4.52-3.927 6.154-6.522 1.039 3.558 3.043 7.372 6.893 6.963 2.32-.056 8.138-6.273 8.676-5.462.537.671.68 1.903.644 3.742-.035 1.839 1.417 1.931 2.075 1.749 1.016-.283 1.655-2.297 2.72-4.048.834-1.372 1.455-2.15 2.283-3.063.417-.452 2.306-2.417 3.638-1.75 1.332.668 1.468 2.039 1.56 2.797.103.76.104 1.567.136 2.45-.04 3.045 1.384 3.475 1.785 3.587 3.292.894 3.496-5.329 5.911-7.639.226-.235 2.336-2.425 3.541 1.148 1.74 6.459 7.097 8.873 14.307 5.282 1.337-.666 1.6-.927 2.33-1.473a.708.708 0 0 0 .283-.562v-.01a.7.7 0 0 0-1.043-.612l-.003.002c-.738.411-3.193 1.235-3.97 1.516-2.91.478-6.473.37-8.228-3.903-.529-1.288-1.053-2.448-1.957-3.667-1.022-1.379-4.37-3.018-7.498-.06-.812.748-1.411 1.576-1.931 2.401-.212.338-.408.677-.594 1.017l-.036-.135c-.276-.957-1.16-4.495-4.835-5.07-.505-.042-2.55-.273-5.38 2.848-.989 1.082-1.811 2.234-2.579 3.4l-.002.004c-.135-.634-.298-1.21-.46-1.463-2.405-3.72-6.046-.75-7.614.358-3.515 2.485-5.144 5.824-7.286-1.762a31.855 31.855 0 0 1-.665-3.26c2.135-3.647 6.48-14.743 3.986-22.182-.162-.47-1.03-2.872-3.118-2.717-.3.03-2.679-.221-3.978 6.461-1.217 6.46-.948 14.787-.653 17.548.033.286.095.851.206 1.59-2.057 3.54-4.76 7.566-6.406 7.754-2.14.243-1.543-1.74-2.849-6.144-.225-.57-.946-3.293-4.192-3.158-1.587.066-3.268.482-5.563 3.006C21.626 32.75 13.128 38.914 7.05 35.04c-.66-.515-3.945-3.214-2.735-11.303a26.182 26.182 0 0 1 1.95-6.452 28.55 28.55 0 0 1 3.338-5.653c6.244-7.711 11.653-8.612 12.72-8.566 2.737.001 3.448 3.563 3.446 3.53.06.626.614 1.084 1.236 1.023a1.136 1.136 0 0 0 1.017-1.243c-.005-.031.005-1.164-.463-2.24-.429-1.402-1.663-2.704-2.381-3.185-.886-.62-2.06-.95-3.442-.951-3.972 0-9.67 2.733-15.234 9.19m40.912 11.254c-.029-12.559 1.559-15.41 1.676-15.19.605 1.128 1.91 8.2-1.65 15.93-.01-.247-.018-.493-.026-.74M26.82 32.784c.046-3.323 4.162-5.412 5.267-3.1.09.19.152.403.21.614-.19.611-.268 1.597-.915 2.935-.682 1.413-1.755 2.114-2.689 2.114-1.033 0-1.896-.859-1.873-2.563" fillRule="evenodd" fill="white"></path></svg>
                <button className='menu-btn' onClick={toggleNavigation}>
                    <svg viewBox="0 0 100 100">
                        <line fill="white" x1="0" y1="25" x2="100" y2="25"></line>
                        <line fill="white" x1="0" y1="50" x2="100" y2="50"></line>
                        <line fill="white" x1="0" y1="75" x2="100" y2="75"></line>
                    </svg>
                </button>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' activeclassname="active">
                            <div>
                                <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><path d="M55.166 59.96c3.063 0 5.554 2.313 5.554 5.153v17.236c0 .625.71 1.152 1.551 1.152h12.554c.842 0 1.554-.527 1.554-1.152V47.895c0-2.841 2.49-5.152 5.553-5.152.882 0 1.364-.473 1.509-.878.137-.381.017-.73-.358-1.04L49.278 12.914c-.671-.555-1.894-.554-2.566 0l-33.795 27.91c-.375.31-.495.66-.359 1.04.146.406.628.879 1.507.879 3.062 0 5.553 2.31 5.553 5.152v34.454c0 .625.712 1.152 1.553 1.152H33.73c.842 0 1.553-.527 1.553-1.152V65.113c0-2.84 2.49-5.152 5.553-5.152h14.33zm7.105 27.54c-3.06 0-5.551-2.31-5.551-5.151V65.113c0-.625-.712-1.152-1.554-1.152h-14.33c-.842 0-1.554.527-1.554 1.152v17.236c0 2.84-2.49 5.152-5.552 5.152H21.17c-3.061 0-5.553-2.311-5.553-5.152V47.895c0-.624-.71-1.152-1.553-1.152-2.432 0-4.5-1.384-5.27-3.525-.714-1.986-.11-4.085 1.576-5.477L44.167 9.83c2.147-1.774 5.512-1.773 7.658 0l33.804 27.91c1.685 1.393 2.29 3.492 1.576 5.478-.77 2.14-2.838 3.525-5.27 3.525-.845 0-1.557.528-1.557 1.152v34.454c0 2.84-2.49 5.152-5.553 5.152H62.27z" fillRule="evenodd" fill="white"></path></svg>
                            </div>
                            <span>Featured</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/sleep' activeclassname="active">
                            <div>
                                <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><path fillRule="evenodd" d="M16.633 64.366c6.016 11.66 18.227 19.252 31.533 19.252 19.55 0 35.452-15.904 35.452-35.453 0-13.82-8.005-26.24-20.285-32.044a39.2 39.2 0 0 1 1.253 9.866c0 21.69-17.645 39.335-39.334 39.335-2.909 0-5.793-.32-8.619-.956M48.166 87.5c-16.26 0-31.05-10.22-36.8-25.435a1.941 1.941 0 0 1 2.442-2.524 35.387 35.387 0 0 0 11.444 1.9c19.549 0 35.453-15.905 35.453-35.454 0-4.3-.769-8.516-2.285-12.526a1.941 1.941 0 0 1 2.442-2.524A39.326 39.326 0 0 1 87.5 48.165c0 21.69-17.645 39.335-39.334 39.335" fill="white"></path></svg>
                            </div>
                            <span>Sleep</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/meditate' activeclassname="active">
                            <div>
                                <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><path d="M48.003 27.035c-11.562 0-20.968 9.407-20.968 20.969 0 11.558 9.406 20.961 20.968 20.961 11.558 0 20.962-9.403 20.962-20.961 0-11.562-9.404-20.969-20.962-20.969m0 47.928c-14.869 0-26.966-12.094-26.966-26.959 0-14.869 12.097-26.967 26.966-26.967 14.866 0 26.96 12.098 26.96 26.967 0 14.865-12.094 26.959-26.96 26.959m0-60.463C29.53 14.5 14.5 29.53 14.5 48.007 14.5 66.475 29.53 81.5 48.004 81.5c18.47 0 33.496-15.025 33.496-33.493C81.5 29.53 66.474 14.5 48.004 14.5m0 73C26.222 87.5 8.5 69.783 8.5 48.007 8.5 26.223 26.222 8.5 48.004 8.5 69.782 8.5 87.5 26.223 87.5 48.007 87.5 69.783 69.782 87.5 48.004 87.5" fillRule="evenodd" fill="white"></path></svg>
                            </div>
                            <span>Meditate</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/body' activeclassname="active">
                            <div>
                                <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><path d="M32.074 8.5c-1.134 0-2.27.275-3.374.816-3.98 1.952-5.402 5.909-3.537 9.847.16.335 3.438 7.145 10.488 13.577-7.887 7.77-10.986 20.253-11.135 20.864l-5.904 24.067c-.493 1.456-.32 2.89-.072 3.871.872 3.465 3.947 5.89 7.475 5.89.618 0 1.234-.076 1.833-.226 2.903-.731 4.983-2.76 5.711-5.568l.02-.075c1.464-6.134 3.37-13.034 4.947-17.827 1.642 4.797 3.641 11.718 5.188 17.873.736 2.843 2.871 4.95 5.714 5.666a7.516 7.516 0 0 0 1.82.225c3.534 0 6.615-2.438 7.493-5.928.203-.806.445-2.332-.072-3.877l-5.894-24.033c-.168-.851-.704-4.657 2.506-6.805 3.657 2.658 6.51 6.647 8.312 11.654l.102.281c1.157 3.086 3.718 5.004 6.683 5.004.944 0 1.916-.192 2.887-.569 4.038-1.571 5.097-5.687 4.072-8.991-1.34-4.882-6.755-14.401-7.372-15.477l-.028-.047a28.062 28.062 0 0 0-5.337-6.519c4.664-1.448 8.061-5.804 8.061-10.938 0-6.313-5.137-11.449-11.45-11.449-6.314 0-11.45 5.136-11.45 11.449 0 .533.037 1.058.107 1.572-4.44-2.892-9.34-6.744-11.467-10.544-.989-1.753-3.233-3.783-6.327-3.783m29.137 5.306a7.45 7.45 0 1 1-7.45 7.449 7.45 7.45 0 0 1 7.45-7.449M32.074 12.5c1.856 0 2.837 1.735 2.837 1.735 4.935 8.825 20.49 16.378 20.49 16.378 3.985 2.23 8.126 5.12 11.094 10.136 0 0 5.807 10.129 7.003 14.616 0 0 1.01 3.087-1.683 4.134-.535.208-1.012.297-1.437.297-1.714 0-2.578-1.45-2.938-2.409-.448-1.196-3.33-10.177-11.873-15.108-8.732 3.137-6.69 12.274-6.69 12.274l5.96 24.305c.213.508.162 1.198.025 1.738-.437 1.741-1.974 2.904-3.614 2.904-.279 0-.562-.034-.843-.104-1.502-.378-2.464-1.417-2.812-2.763 0 0-6.452-25.666-9.114-25.666-2.663 0-8.792 25.666-8.792 25.666-.348 1.346-1.31 2.315-2.812 2.693a3.565 3.565 0 0 1-.86.106c-1.633 0-3.16-1.136-3.597-2.871-.136-.54-.189-1.213.026-1.721l5.96-24.296s3.83-15.827 13.61-21.763c-8.285-6.028-12.563-13.909-13.236-15.33-.673-1.421-.779-3.336 1.683-4.543.595-.292 1.134-.408 1.613-.408" fillRule="evenodd" fill="white"></path></svg>
                            </div>
                            <span>Body</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/scenes' activeclassname="active">
                            <div>
                                <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><path d="M64.026 73.625L54.78 53.971l7.995-14.425L82.07 73.625H64.026zm-50.36-.001l13.657-28.728 2.262 4.119a1.994 1.994 0 0 0 1.753 1.038c.387 0 .77-.114 1.1-.331l4.327-2.852 4.327 2.852a2.001 2.001 0 0 0 2.864-.726l2.162-4.041 13.487 28.669h-45.94zm23.089-48.57l7.24 15.389-2.532 4.733-3.598-2.371a1.996 1.996 0 0 0-2.201 0l-3.617 2.384-2.607-4.747 7.315-15.388zM87.24 74.64L64.497 34.469c-.356-.63-1.01-.973-1.75-1.015a2.004 2.004 0 0 0-1.74 1.03L52.68 49.508 38.574 19.524a2 2 0 0 0-1.805-1.149h-.004a2 2 0 0 0-1.806 1.142L8.694 74.766a1.998 1.998 0 0 0 1.807 2.858h52.246l.009.001H85.5a1.999 1.999 0 0 0 1.74-2.985z" fillRule="evenodd" fill="white"></path></svg>
                            </div>
                            <span>Scenes</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile' activeclassname="active">
                            <div>
                                <svg height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><path d="M48 54.865c-6.88 0-12.477-5.597-12.477-12.477 0-6.879 5.597-12.477 12.477-12.477s12.477 5.598 12.477 12.477c0 6.88-5.597 12.477-12.477 12.477m23.305 19.88c-1.332-8.374-7.085-15.29-14.784-18.28 4.759-2.894 7.956-8.113 7.956-14.077 0-9.085-7.392-16.477-16.477-16.477s-16.477 7.392-16.477 16.477c0 5.965 3.196 11.183 7.956 14.076-7.699 2.992-13.452 9.907-14.784 18.281C17.23 68.232 12.5 58.661 12.5 48c0-19.575 15.925-35.5 35.5-35.5S83.5 28.425 83.5 48c0 10.661-4.73 20.232-12.195 26.745m-42.862 2.862C28.897 67.2 37.482 58.865 48 58.865c10.518 0 19.103 8.334 19.557 18.742A35.282 35.282 0 0 1 48 83.5a35.282 35.282 0 0 1-19.557-5.893M48 8.5C26.22 8.5 8.5 26.22 8.5 48S26.22 87.5 48 87.5 87.5 69.78 87.5 48 69.78 8.5 48 8.5" fillRule="evenodd" fill="white"></path></svg>
                            </div>
                            <span>Profile</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className='scene-audio'>
                <p>Scene audio</p>
                <audio controls loop autoPlay src={props.scene.audio} title={props.scene.title} ></audio>
            </div>
        </div>
    );
}

const mapStateToProps = ({scene}) => ({
    scene
});

export default connect(
    mapStateToProps,
)(Navigation);

