cd '.\admin.LightOfScience.tk'
for ($i = 3; $i -ge 0; $i-- )
{
    Write-Progress -Activity "Pushing to Admin Website | Waiting:" -Status "$i sec";
    Start-Sleep -s 1;
}
git push --all admin;
git push admin --tags;
cd..

cd '.\dev.LightOfScience.tk'
for ($i = 3; $i -ge 0; $i-- )
{
    Write-Progress -Activity "Pushing to Dev Website | Waiting:" -Status "$i sec";
    Start-Sleep -s 1;
}
git push --all dev;
git push dev --tags;
cd..

for ($i = 3; $i -ge 0; $i-- )
{
    Write-Progress -Activity "Pushing to Website | Waiting:" -Status "$i sec";
    Start-Sleep -s 1;
}
git push --all website;
git push website --tags;

