<script>
  import Card from "./Card.svelte";
  import {FeedbackStore} from "../stores.js";

  export let item;

  const handleDelete = (id) => {
    FeedbackStore.update((currentFeedback) => currentFeedback.filter((item => item.id !== id)))
  }
</script>
<Card>
    <div class="num-display">
        {item.rating}
    </div>
    <button class="close" on:click={() => handleDelete(item.id)}>X</button>
    <p class="text-display">
        {item.text}
    </p>
</Card>

<style>
    .num-display {
        position: absolute;
        top: -10px;
        left: -10px;
        width: 25px;
        height: 25px;
        background-color: #999999;
        color: #fff;
        border: 1px #eee solid;
        border-radius: 50%;
        padding: 10px;
        text-align: center;
        font-size: 19px;
    }

    .close {
        position: absolute;
        top: 10px;
        right: 20px;
        cursor: pointer;
        background: none;
        border: none;
    }
</style>
