# PowerShell script to generate placeholder product images

$imagesDir = "images"

# Create product images
$products = @(
    @{Name="onu"; Title="DUALBAND CATV ONU"; Color="#007bff"},
    @{Name="wifi7"; Title="WIFI7 XGSPON ONU"; Color="#28a745"},
    @{Name="olt-huawei"; Title="OLT MA5800X7"; Color="#dc3545"},
    @{Name="olt-zte"; Title="OLT C320"; Color="#ffc107"},
    @{Name="cables"; Title="Fiber Cables"; Color="#17a2b8"},
    @{Name="junction"; Title="Junction Box"; Color="#6f42c1"},
    @{Name="otdr"; Title="OTDR"; Color="#fd7e14"},
    @{Name="splicer"; Title="Fusion Splicer"; Color="#20c997"},
    @{Name="rru"; Title="RRU"; Color="#e83e8c"},
    @{Name="bbu"; Title="BBU"; Color="#343a40"}
)

foreach ($product in $products) {
    $svgContent = @"
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" width="400" height="300">
  <rect width="400" height="300" fill="$($product.Color)" opacity="0.8"/>
  <rect x="50" y="50" width="300" height="200" fill="white" rx="10" ry="10"/>
  <text x="200" y="120" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="$($product.Color)">$($product.Title)</text>
  <text x="200" y="160" font-family="Arial, sans-serif" font-size="16" text-anchor="middle" fill="#666">Product Image</text>
  <text x="200" y="190" font-family="Arial, sans-serif" font-size="14" text-anchor="middle" fill="#999">Placeholder for $($product.Name)</text>
</svg>
"@
    $svgContent | Out-File -FilePath "$imagesDir/product-$($product.Name).svg" -Encoding UTF8
}

Write-Host "Generated product images in $imagesDir"