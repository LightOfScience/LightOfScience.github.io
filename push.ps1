for ($i = 3; $i -ge 0; $i-- )
{
    Write-Progress -Activity "Pushing to Website | Waiting:" -Status "$i sec";
    Start-Sleep -s 1;
}
git push --all website;

for ($i = 3; $i -ge 0; $i-- )
{
    Write-Progress -Activity "Pushing to DevBeta | Waiting:" -Status "$i sec";
    Start-Sleep -s 1;
}
git push DevBeta +DevBeta:master --tag;