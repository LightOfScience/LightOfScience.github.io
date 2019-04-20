for ($i = 3; $i -ge 0; $i-- )
{
    Write-Progress -Activity "Pushing to Website | Waiting:" -Status "$i sec";
    Start-Sleep -s 1;
}
git push --all website;
git push website --tags;

for ($i = 3; $i -ge 0; $i-- )
{
    Write-Progress -Activity "Pushing to DevBeta | Waiting:" -Status "$i sec";
    Start-Sleep -s 1;
}
git push DevBeta +DevBeta:master --tag;


cd '.\admin.LightOfScience.tk'
for ($i = 3; $i -ge 0; $i-- )
{
    Write-Progress -Activity "Pushing to Admin Website | Waiting:" -Status "$i sec";
    Start-Sleep -s 1;
}
git push --all admin;
git push admin --tags;
cd..