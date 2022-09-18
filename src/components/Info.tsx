import styles from "./Info.module.css";

export default function Info() {
	return (
		<header className={styles.wrapper}>
			<div className={styles.created}>
				<p>Tarefas criadas</p>
				<small>0</small>
			</div>
			<div className={styles.done}>
				<p>Concluídas</p>
				<small>0</small>
			</div>
		</header>
	);
}
