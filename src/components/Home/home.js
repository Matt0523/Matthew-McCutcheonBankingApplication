import Card from '../../util/card';
export default function Home() {

  return (
    <Card
    bgcolor="secondary"
    header="Welcome to BadBank"
    body={
      <>
        <p>We are the bad boys of banking</p>
        <div>
          <img src='./bankicon.png' alt="wat" width="100%"/>
        </div>
      </>
    }
    />
  )
}