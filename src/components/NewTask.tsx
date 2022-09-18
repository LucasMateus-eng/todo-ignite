import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";

export default function NewTask() {
	return (
		<section className={styles.wrapper}>
			<input
				type="text"
				name="new-task"
				id="new-task"
				placeholder="Adicione uma nova tarefa"
			/>
			<button type="submit">
				Criar <PlusCircle size={24} />
			</button>
		</section>
	);
}
