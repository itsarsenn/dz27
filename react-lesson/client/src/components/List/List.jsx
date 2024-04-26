import styles from './List.module.css'

function List() {
	return (
		<ul className={styles['list']}>
<div className={styles['list-item']}>Текст...</div>

<div className={styles['list-item1']}>Текст?</div>

<div className={styles['list-item2']}>Не текст</div>

		</ul>
	)
	
}



export default List
