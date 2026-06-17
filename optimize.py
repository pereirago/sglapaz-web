import os
from PIL import Image

assets_dir = r"c:\Users\Gregory\Documents\ANTIGRAVITY_FOLDER_BASE\DESARROLLO WEP\sglapaz\assets\images"

for file in os.listdir(assets_dir):
    if file.endswith(".png") and file != "favicon.png" and file != "logo.png":
        filepath = os.path.join(assets_dir, file)
        try:
            with Image.open(filepath) as img:
                # Convert RGBA to RGB for webp
                if img.mode in ('RGBA', 'LA') or (img.mode == 'P' and 'transparency' in img.info):
                    alpha = img.convert('RGBA').split()[-1]
                    bg = Image.new("RGB", img.size, (255, 255, 255))
                    bg.paste(img, mask=alpha)
                    img = bg
                else:
                    img = img.convert('RGB')
                
                # Resize if width is larger than 1920
                if img.width > 1920:
                    ratio = 1920 / img.width
                    new_size = (1920, int(img.height * ratio))
                    img = img.resize(new_size, Image.Resampling.LANCZOS)
                
                webp_path = os.path.join(assets_dir, file.replace(".png", ".webp"))
                img.save(webp_path, "WEBP", quality=80)
                print(f"Converted and optimized: {file} -> {os.path.basename(webp_path)}")
        except Exception as e:
            print(f"Error processing {file}: {e}")
