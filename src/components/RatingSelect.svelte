<script>
  import {createEventDispatcher} from 'svelte';

  const dispatch = createEventDispatcher()
  let options = [
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
    {value: 6},
    {value: 7},
    {value: 8},
    {value: 9},
    {value: 10}
  ];
  let selected = 0;
  const onChange = (e) => {
    selected = e.currentTarget.value;
    dispatch('rating-selected', selected)
  }
</script>

<ul class="rating">
    {#each options as option}
        <li>
            <input type="radio" name="rating" id={'num'+option.value} value={option.value} on:change={onChange}
                   checked={selected === option.value}/>
            <label for={'num'+option.value}>{option.value}</label>
        </li>
    {/each}
</ul>

<style>
    .rating {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 30px 0;
        list-style: none;
    }

    .rating li {
        position: relative;
        background: #f4f4f4;
        width: 25px;
        height: 25px;
        padding: 10px;
        text-align: center;
        border-radius: 50%;
        font-size: 19px;
        border: 1px #ccc solid;
        transition: 0.3s;
    }

    .rating li label {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 25px;
        height: 25px;
        padding: 10px;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        cursor: pointer;
    }

    .rating li:hover {
        background: #246A73;
        color: #fff;
    }

    /* Make actual radio select invisible */
    [type='radio'] {
        opacity: 0;
    }

    /* Use the sibling select */
    [type='radio']:checked ~ label {
        background: #246A73;
        color: #fff;
    }
</style>
