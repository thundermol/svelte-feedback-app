<script>
  import FeedbackItem from "./FeedbackItem.svelte";
  import {fade, scale} from "svelte/transition";
  import {FeedbackStore} from "../stores.js";


</script>

{#each $FeedbackStore as feedbackItem (feedbackItem.id)}
    <div in:scale out:fade={{duration:500}}>
        <FeedbackItem item="{feedbackItem}"/>
    </div>
{/each}
