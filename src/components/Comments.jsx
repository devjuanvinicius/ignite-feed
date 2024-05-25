import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comments.module.css";
import { Avatar } from "./Avatar";

export function Comment({ content, onDeleteComment }) {
  function handleDeleteContent() {
    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/devjuanvinicius.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Juan Vinicius</strong>
              <time title="24 de maio às 09:14" dateTime="2024-05-04 09:14:21">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteContent} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
