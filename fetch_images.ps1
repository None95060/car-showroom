$accessKey = "8dR9W__pCFFY5xjjewO3-7j1tP2EB5ymHpo5CsywO7E"

$cars = @(
    "Toyota Passo",
    "Toyota Probox",
    "Nissan Juke",
    "Suzuki Swift",
    "Hyundai i10",
    "Toyota Corolla",
    "Nissan Sylphy",
    "Toyota Wish",
    "Honda Fit",
    "Mazda Mazda3",
    "Hyundai Elantra",
    "Kia Cerato",
    "Toyota Harrier",
    "Subaru Forester",
    "Mazda CX-5",
    "Nissan X-Trail",
    "Volkswagen Tiguan",
    "Toyota Vanguard",
    "Hyundai Tucson",
    "Kia Sportage",
    "Toyota Hilux",
    "Isuzu D-MAX",
    "Nissan Navara",
    "Mitsubishi L200",
    "Mercedes-Benz C-Class",
    "BMW 3 Series",
    "Land Rover Range Rover",
    "Lexus RX",
    "Volvo XC60",
    "Audi Q5",
    "Mercedes-Benz GLE",
    "BMW X5",
    "Toyota Camry",
    "Honda Civic",
    "BMW X3",
    "Audi A4",
    "Tesla Model 3",
    "Nissan Altima",
    "Toyota Vitz",
    "Toyota RAV4",
    "Toyota Prius",
    "Honda Accord",
    "Nissan Sentra",
    "Subaru Outback",
    "Subaru XV",
    "Subaru Legacy",
    "Scania R500",
    "Volvo FH16",
    "MAN TGX",
    "Ford Focus",
    "Chevrolet Cruze",
    "Skoda Octavia",
    "Ford Explorer",
    "Chevrolet Trailblazer",
    "Jeep Compass",
    "Mitsubishi Outlander",
    "Porsche Cayenne",
    "Jaguar F-PACE",
    "Tesla Model X"
)

foreach ($car in $cars) {
    $query = $car -replace " ", "+"
    $url = "https://api.unsplash.com/search/photos?query=$query&client_id=$accessKey"
    $response = Invoke-WebRequest -Uri $url -UseBasicParsing
    $json = $response.Content | ConvertFrom-Json
    if ($json.results.Count -gt 0) {
        $imageUrl = $json.results[0].urls.regular
        $filename = ($car -replace " ", "-" -replace "-", "").ToLower() + ".jpg"
        Invoke-WebRequest -Uri $imageUrl -OutFile "images/$filename"
        Write-Host "Downloaded $filename"
    } else {
        Write-Host "No image found for $car"
    }
}
