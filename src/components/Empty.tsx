import styles from "./Empty.module.css";
import Clipboard from "./../assets/clipboard.svg";

export default function Empty() {
	return (
		<div className={styles.wrapper}>
			<img src={Clipboard} alt="Clipboard" />
			<div className={styles.content}>
				<p>Você ainda não tem tarefas cadastradas</p>
				<small>Crie tarefas e organize seus itens a fazer</small>
			</div>
		</div>
	);
}
