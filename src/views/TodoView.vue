<template>
  <div class="todo-page">
    <div class="container">
      <h3>To Do!</h3>
      <div class="todo-input">
        <input type="text" placeholder="Add a todo" @keydown.enter="addTodoContent" v-model="newTodoContent">
        <button @click="addTodoContent">Add</button>
      </div>
      <ul class="todo-list" v-show="todoList.length > 0">
        <li v-for="lists in todoList" :key="lists.idx" :class="lists.done ? 'success-list' : ''">
          <span>{{lists.content}}</span>
          <button :class="lists.done ? 'success-btn' : ''" @click="doneTodo(lists.id)">V</button>
          <button class="fail-btn" @click="removeTodo(lists.id)">X</button>
        </li>
      </ul>
    </div>
  </div>  
</template>

<script>
import { ref, onMounted } from 'vue';
import {
  collection, onSnapshot, addDoc,
  deleteDoc, doc, updateDoc,
  query, orderBy
} from 'firebase/firestore';
import { db } from '../../public/js/firebase';
export default {
  setup() {

    // firestore ref
    const fbCollection = collection(db, 'todos');

    const fbCollectionQuery = query(fbCollection, orderBy('date', 'asc'))


    const newTodoContent = ref('');

    const todoList = ref([]);

    onMounted(async () => {
      // 변경 감지 스냅샷
      onSnapshot(fbCollectionQuery, (querySnapshot) => {
        const fbTodos = [];
        querySnapshot.forEach((doc) => {
          const todo = {
            id: doc.id,
            content: doc.data().content,
            done: doc.data().done,
            date: doc.data().date,
          }
          fbTodos.push(todo);
        })
        todoList.value = fbTodos;
      })
    })

    

    const addTodoContent = async () => {
      console.log(newTodoContent);
      if (newTodoContent.value == '') {
        alert('입력해주세요.')
      } else {

        await addDoc(fbCollection, {
          content: newTodoContent.value,
          done: false,
          date: new Date()
        })
        newTodoContent.value = '';
      }
    }

    const doneTodo = async (id) => {
      const index = todoList.value.findIndex(todo => todo.id === id);

      await updateDoc(doc(fbCollection, id), {
        done: !todoList.value[index].done
      })
    }

    const removeTodo = async (id) => {
      await deleteDoc(doc(fbCollection, id));
    }


    return { newTodoContent, todoList, addTodoContent, doneTodo, removeTodo };
  }
}
</script>

<style lang="scss" scoped>
.todo-page {
  background: #fff;
  .container {
    padding: 30px 20px ;
    box-sizing: border-box;
  }
  h3 {
    text-align: center;
    font-size: 4rem;
  }
  .todo-input {
    display: flex;
    gap: 10px;
    height: 60px;
    margin-top: 40px;
    > input {
      width: 80%;
      height: 100%;
      background: #fff;
      padding: 0 12px;
      border: 1px solid #777;
      border-radius: 2px;
      box-sizing: border-box;
      color: #000;
      font-size: 1.8rem;
    }
    > button {
      width: 20%;
      height: 100%;
      cursor: pointer;
    }
  }
  .todo-list {
    margin-top: 40px;
    
    > li {
      height: 50px;
      border-radius: 2px;
      background: #fff;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0 12px;
      border: 1px solid #777;
      margin-bottom: 20px;
      box-shadow: 2px 2px 5px rgba(0,0,0,0.2);

      span {
        width: calc(100% - 60px);
      }

      button {
        width: 30px;
        height: 30px;
        cursor: pointer;
        background: #fff;
        border-radius: 2px;
        border: 1px solid #000;
      }
      button:last-child {
        margin-left: 5px;
      }
      .fail-btn {
        background: red;
        color: #fff;
      }

      .success-btn {
        background: green;
        color: #fff;
      }

    }
    > li:last-child {
      margin-bottom: 0;
    }
    .success-list {
      span {
        text-decoration:line-through;
        text-decoration-color: red;
      }
    }
    
  }
}
</style>