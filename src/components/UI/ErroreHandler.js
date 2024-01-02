import Card from './Card'
import Button from './Button'
import classes from './ErrorModal.module.css'


const ErroreHandler=(props)=>{
    return (
        <div>
         <div className={classes.backdrop} onClick={props.onConfirm}/>
              <Card className={classes.modal}>
                <header className={classes.header}>{props.title}</header>
                <div className={classes.content}>
                  <p>{props.message}</p>
                </div>
            <footer className={classes.actions}>
                <Button onClick={props.onConfirm}>okay</Button>
            </footer>
        </Card>
   </div>
    )

};
export default ErroreHandler;