import os
import json
import glob

def get_image_extensions():
    return {'.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp'}

def generate_manifest():
    # Define paths
    current_dir = os.path.dirname(os.path.abspath(__file__))
    public_dir = os.path.join(current_dir, 'public')
    events_dir = os.path.join(public_dir, 'images', 'events')
    output_file = os.path.join(current_dir, 'src', 'data', 'event_images.json')

    # Ensure output directory exists
    os.makedirs(os.path.dirname(output_file), exist_ok=True)

    manifest = {}
    image_extensions = get_image_extensions()

    # Walk through the events directory
    if os.path.exists(events_dir):
        for event_name in os.listdir(events_dir):
            event_path = os.path.join(events_dir, event_name)
            
            if os.path.isdir(event_path):
                images = []
                # Find all images in the event folder
                for ext in image_extensions:
                    pattern = os.path.join(event_path, f"*{ext}")
                    found_files = glob.glob(pattern)
                    for file_path in found_files:
                        # Create relative path for web usage (e.g., /images/events/event_name/pic1.jpg)
                        rel_path = os.path.relpath(file_path, public_dir)
                        # Ensure forward slashes for web URLs
                        web_path = '/' + rel_path.replace(os.sep, '/')
                        images.append(web_path)
                
                # Sort images naturally (pic1, pic2, pic10)
                # We can use a simple sort since they are named picX.jpg
                def sort_key(s):
                    try:
                        # Extract number from filename (pic1.jpg -> 1)
                        basename = os.path.basename(s)
                        name_part = os.path.splitext(basename)[0]
                        if name_part.startswith('pic'):
                            return int(name_part[3:])
                        return 0
                    except ValueError:
                        return 0
                
                images.sort(key=sort_key)
                
                if images:
                    manifest[event_name] = images
                    print(f"Found {len(images)} images for event: {event_name}")

    # Write manifest to JSON file
    with open(output_file, 'w') as f:
        json.dump(manifest, f, indent=2)
    
    print(f"\nManifest generated at: {output_file}")

if __name__ == "__main__":
    generate_manifest()
