import styled from "styled-components";

//#E2F2E8
//#70CFB7
//#25463d

export const Header = styled.header`
	@media only screen and (min-width: 800px) {
		&{
			background-color: #70CFB7;
			position: fixed;
			width: 100%;

			img{
				display: none;
			}

			nav{
				display: flex;
				justify-content: center;
				align-items: center;
				gap: 10vw;
	
				a{
					color: #E2F2E8;
					text-decoration: none;
					font-size: 4vw;
					padding: 1vw;
					transition: 500ms;
					
					:hover{
						background-color: rgba(37, 70, 61, 0.5);
					}
				}
			}
		}
	}

	@media only screen and (max-width: 799px) {
		&{
			background-color: #70CFB7;
			position: fixed;
			width: 100%;
			padding: 2vw;

			img{
				border-radius: 50%;
				width: 15vw;
				display: flex;
				margin: auto;
			}

			nav{
				display: none;
			}
		}
	}
`;


export const Main = styled.main`
	@media only screen and (min-width: 800px) {
		&{
			background-image: url('/banner.svg');
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			height: 100vh;
	
			display: flex;
			justify-content: center;
	
			section{
				display: flex;
				align-items: center;
	
				div{
					width: 40vw;
					text-align: center;
	
					h1{
						margin: 0px;
						font-size: 8vw;
					}
					p{
						margin: 0px;
						font-size: 2vw;
					}
				}
	
				img{
					width: 50%;
				}
			}
		}
	}

	@media only screen and (max-width: 799px) {
		&{
			background-image: url('/banner.svg');
			background-repeat: no-repeat;
			background-size: cover;
			background-position: center;
			height: 100vh;
	
			display: flex;
			justify-content: center;
	
			section{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
	
				div{
					width: 80vw;
					text-align: center;
	
					h1{
						margin: 0px;
						font-size: 20vw;
					}
					p{
						margin: 0px;
						font-size: 8vw;
					}
				}
	
				img{
					width: 80%;
				}
			}
		}
	}
`;