<template>
    <div>
        <h1>Login</h1>
        <form method="post" action="/login">
            <select name="username">
                <option>adi@games2.com</option>
                <option>admin@games.com</option>
            </select>
            <input name="password" type="hidden" value="password">
            <button type="submit">Login </button>
        </form>
    </div>
</template>