import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  width: 95vw;
  max-width: 600px;
  height: 332px;

  border: 2px solid ${props => props.theme["border-primary"]};

  color: ${props => props.theme["text-primary"]};

  .joke__wrapper{
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 232px;

    border-bottom: 2px solid ${props => props.theme["border-primary"]};
  }
`;

export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 90%;
  height: 82px;

  padding-left: 20px;

  .user__info{
    display: flex;
    align-items: center;
    gap: 10px;

    img{
      height: 60px;
      width: 60px;
      border-radius: 50%;
    }
  }

  .user__name{
    h1{
      font-size: 1.5rem;
      font-weight: 500;
      margin: 0;
    }
    
    a{
      font-size: 1rem;
      font-weight: 500;
      text-decoration: none;
      text-transform: lowercase;

      color: ${props => props.theme["text-secondary"]};
      transition: 0.2s;

      &:hover{
        text-decoration: underline;
      }
    }
  }
`;

export const JokeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;

  p{
    max-width: 90%;
    padding-left: 20px;

    font-size: 1.2rem;
    font-weight: 400;

    margin: 0;
    margin-bottom: 12px;

    &:first-child{
      margin-top: 20px;
    }
  }
`;

export const NewJokeButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  width: 100%;

  button{
    border: 0;
    border-radius: 99px;
    outline: 0;

    padding: 0.8rem 2rem;

    cursor: pointer;

    color: ${props => props.theme["text-primary"]};
    background-color: ${props => props.theme["secondary"]};
    
    font-size: 1.5rem;

    transition: 0.2s;

    &:hover{
      background-color: ${props => props.theme["secondary-hover"]};
    }

    &:disabled{
      cursor: progress;
      background-color: ${props => props.theme["secondary-opaque"]};
    }
  }

  @media (max-wdith: 767px) {
    .new__joke-btn{
      font-size: 1.2rem;
    }
  }
`;