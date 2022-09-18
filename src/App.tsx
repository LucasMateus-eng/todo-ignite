import Header from "./components/Header";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";

import styles from "./App.module.css";

function App() {
	return (
		<>
			<Header />
			<main className={styles.wrapper}>
				<NewTask />
				<Tasks />
			</main>
		</>
	);
}

export default App;