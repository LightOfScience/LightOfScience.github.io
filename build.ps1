start powershell {
    jekyll serve --watch
}
start powershell {
    cd .\assets\css\
    sass --watch --style=compressed globalstyle.scss:globalstyle.css home.scss:home.css
}