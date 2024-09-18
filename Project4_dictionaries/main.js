function my_Dictionary(){
    var Animal = {
        Species: "Dog",
        Color:"White and Brown",
        Breed:"Mahuahuapoo",
        Age:13,
        Sound:"Bark!"
    };
    delete Animal.Age;
    document.getElementById("Dictionary").innerHTML = Animal.Age;
}