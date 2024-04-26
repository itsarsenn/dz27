import styles from './List1.module.css'

function List1() {
	return (
		<div className={styles['list1']}>
            <img src='https://hi-news.ru/wp-content/uploads/2023/03/bing_gpt_19-750x588.jpg' className={styles['list1-item']} />
            <img src='https://hi-news.ru/wp-content/uploads/2023/03/bing_gpt_19-750x588.jpg' className={styles['list1-item1']} />
            <img src='https://hi-news.ru/wp-content/uploads/2023/03/bing_gpt_19-750x588.jpg' className={styles['list1-item2']} />
        </div>
	)
	
}



export default List1