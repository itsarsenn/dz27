import Block from './components/Block/Block'
import List from './components/List/List'
import List1 from './components/List1/List1'
import styles from './App.module.css'
function App() {
	return (
		<div className={styles['container']}>
			{/* <h1>Hello</h1> */}
			<Block />
			<List1/>
			<List />
		</div>
	)
}

export default App
