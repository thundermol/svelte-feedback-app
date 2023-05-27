<script>
  export let style = 'primary'
  export let type = 'button'
  export let disabled = false
</script>
<button {type} {disabled} class={style}>
    <slot></slot>
</button>

<style>
    button {
        color: #fff;
        border: 0;
        border-radius: 8px;
        width: 100px;
        margin:0;
    }

    .primary {
        background-color: brown;
    }

    .secondary {
        background-color: blue;
    }

    button:hover {
        transform: scale(0.98);
        opacity: .9;
    }

    button:disabled {
        background-color: #ccc;
        color: #333;
        cursor: auto;
    }

    button:disabled:hover {
        transform: scale(1);
        opacity: 1;
    }
</style>
