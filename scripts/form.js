export const Form = () => {
    const html = `
    <section class="form">
    <h1>Answer these optional* questions so that we can personalize your movie recommendation</h1>
    <p>*all fields are required</p>
    <form class="form">
    <label for="scaryMovie">1. What's your favorite scary movie?</label>
    <input type="text" max="4" required>
    <label for="genre">2. What's your favorite movie genre?</label>
    <input type="text" required>
    <label for="grandma" class="grandma">2. What's your grandmother's favorite animal?</label>
    <select name="grandma id="grandma" required>
        <option value="" diabled selected hidden></option>
        <option value="giant_panda">Giant Panda</option>
        <option value="red_panda">Red Panda</option>
        <option value="hello_panda">Hello Panda</option>
        <option value="desiigner_panda">Desiigner Panda</option>
        <option value="armadillo">Armadillo</option>
    </select>
    <label for="husband" id="husband" required>2. What was your first grade teacher's husband's middle name?</label>
    <select name="husband" id="husband" required>
        <option value="" disabled selected hidden></option>
        <option value="Christopher">Christopher</option>
        <option value="Rupert">Rupert</option>
        <option value="Windermere">Windermere</option>
        <option value="Vladimir">Vladimir</option>
        <option value="Carl">Carl</option>
        <option value="Alexander">Alexander</option>
        <option value="Francois">Francois</option>
        <option value="Reginald">Reginald</option>
        <option value="Lancelot">Lancelot</option>
        <option value="Herman">Herman</option>
        <option value="Herman?">Herman?</option>
        <option value="Herman">Herman</option>
        <option value="Gregory">Gregory</option>
        <option value="James">James</option>
    </select>
    <label for="JR">2. Who shot JR?</label>
    <input type="password" name="JR" id="JR" required>
    <label for="onomatopoeia">2. What does onomatopoeia mean?</label>
    <textarea name="onomatopoeia" id="onomatopoeia" cols="30" rows="10"></textarea>
    <label for="yourBirthday">2. When is your birthday?</label>
    <input type="date" name="yourBirthday" id="yourBirthday" required>
    <label for="myBirthday">3. When is MY birthday?</label>
    <input type="date" name="myBirthday" id="myBirthday" required>
    <label for="SSN">3. What's your social security number?</label>
    <input type="number" name="SSN" id="SSN">
    <label for="license">3. Upload a copy of your driver's license.</label>
    <input type="file" name="license" id="license">
    <label for="magicWord">3. Say the magic word!</label>
    <label for="streamingService">3. Which streaming service do you use? (Choose all that apply)</label>
    <select name="streamingService" id="streamingService" required>
        <option value="" disabled selected hidden></option>
        <option value="Netflix">Netflix</option>
        <option value="Hulu">Hulu</option>
        <option value="Disney+">Disney+</option>
        <option value="Amazon Prime">Amazon Prime</option>
        <option value="CNN+">CNN+</option>
        <option value="Turner Classic Movies Unlimited">Turner Classic Movies Unlimited</option>
        <option value="Channel 12 News Prime">Channel 12 News Prime</option>
        <option value="Roku Unlimited Plus Prime Premium">Roku Unlimited Plus Prime Premium</option>
        <option value="all that apply">all that apply</option>
    </select>
    <label for="number">#. What number am I thinking of?</label>
    <input type="tel" name="number" id="number" required>
    <label for="void">5. Have you been humbled by the void?</label>
    <input type="color" name="void" id="void">
    <label for="two">6. What was your answer to number 2?</label>
    <input type="text" required>
    <input type="reset" value="리샛" class="reset">
</form> 
</section>`
return html
}