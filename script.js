// 导航栏功能
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 汉堡菜单切换
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // 汉堡菜单动画
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    });
    
    // 导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有活动状态
            navLinks.forEach(l => l.classList.remove('active'));
            // 添加当前活动状态
            this.classList.add('active');
            
            // 关闭移动端菜单
            navMenu.classList.remove('active');
            const bars = hamburger.querySelectorAll('.bar');
            bars.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
            
            // 平滑滚动到目标区域
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // 减去导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 滚动时更新导航状态
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
        
        // 导航栏背景透明度
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    });
});

// 图片画廊功能
document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.getElementById('modalPrev');
    const nextBtn = document.getElementById('modalNext');
    
    let currentImageIndex = 0;
    const images = []; // 这里将存储实际的图片信息
    
    // 为每个图片项添加点击事件（当前为占位符）
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            // 这里是占位符功能，实际使用时需要替换为真实图片
            const placeholder = item.querySelector('.image-placeholder p').textContent;
            const caption = item.querySelector('.image-caption h4').textContent;
            const description = item.querySelector('.image-caption p').textContent;
            
            // 创建占位符图片
            const canvas = document.createElement('canvas');
            canvas.width = 800;
            canvas.height = 600;
            const ctx = canvas.getContext('2d');
            
            // 绘制占位符
            ctx.fillStyle = '#e2e8f0';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#64748b';
            ctx.font = '24px Inter, sans-serif';
            ctx.textAlign = 'center';
            ctx.fillText(placeholder, canvas.width/2, canvas.height/2 - 20);
            ctx.font = '16px Inter, sans-serif';
            ctx.fillText('【待填充实际图片】', canvas.width/2, canvas.height/2 + 20);
            
            modalImg.src = canvas.toDataURL();
            modalCaption.innerHTML = `<h4>${caption}</h4><p>${description}</p>`;
            modal.style.display = 'block';
            currentImageIndex = index;
        });
    });
    
    // 关闭模态框
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // 点击模态框背景关闭
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // 键盘事件
    document.addEventListener('keydown', function(e) {
        if (modal.style.display === 'block') {
            if (e.key === 'Escape') {
                modal.style.display = 'none';
            } else if (e.key === 'ArrowLeft') {
                showPrevImage();
            } else if (e.key === 'ArrowRight') {
                showNextImage();
            }
        }
    });
    
    // 上一张图片
    prevBtn.addEventListener('click', showPrevImage);
    
    // 下一张图片
    nextBtn.addEventListener('click', showNextImage);
    
    function showPrevImage() {
        currentImageIndex = (currentImageIndex - 1 + galleryItems.length) % galleryItems.length;
        galleryItems[currentImageIndex].click();
    }
    
    function showNextImage() {
        currentImageIndex = (currentImageIndex + 1) % galleryItems.length;
        galleryItems[currentImageIndex].click();
    }
});

// 视频播放功能（占位符）
document.addEventListener('DOMContentLoaded', function() {
    const videoItems = document.querySelectorAll('.video-item');
    
    videoItems.forEach(item => {
        item.addEventListener('click', function() {
            const videoTitle = item.querySelector('.video-info h4').textContent;
            alert(`视频播放功能：${videoTitle}\n\n这是一个占位符功能。\n实际使用时，您可以：\n1. 嵌入YouTube/Vimeo视频\n2. 使用HTML5 video标签\n3. 链接到外部视频文件`);
        });
    });
});

// 下载功能（占位符）
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtns = document.querySelectorAll('.download-item .btn');
    
    downloadBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const downloadType = btn.closest('.download-item').querySelector('h4').textContent;
            alert(`下载功能：${downloadType}\n\n这是一个占位符功能。\n实际使用时，请将href属性指向实际的文件链接。`);
        });
    });
});

// 平滑滚动动画
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 观察所有需要动画的元素
    const animatedElements = document.querySelectorAll('.gallery-item, .video-item, .download-item, .step-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// 工具函数：添加实际图片
function addRealImage(galleryIndex, imageSrc, title, description) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryIndex < galleryItems.length) {
        const item = galleryItems[galleryIndex];
        const placeholder = item.querySelector('.image-placeholder');
        
        // 替换占位符为实际图片
        placeholder.innerHTML = `<img src="${imageSrc}" alt="${title}" style="width: 100%; height: 100%; object-fit: cover;">`;
        
        // 更新标题和描述
        const caption = item.querySelector('.image-caption');
        caption.querySelector('h4').textContent = title;
        caption.querySelector('p').textContent = description;
    }
}

// 工具函数：添加实际视频
function addRealVideo(videoIndex, videoSrc, title, description, thumbnail = null) {
    const videoItems = document.querySelectorAll('.video-item');
    if (videoIndex < videoItems.length) {
        const item = videoItems[videoIndex];
        const placeholder = item.querySelector('.video-placeholder');
        
        // 创建视频元素
        const videoHTML = `
            <video width="100%" height="100%" controls ${thumbnail ? `poster="${thumbnail}"` : ''}>
                <source src="${videoSrc}" type="video/mp4">
                您的浏览器不支持视频播放。
            </video>
        `;
        
        placeholder.innerHTML = videoHTML;
        
        // 更新标题和描述
        const info = item.querySelector('.video-info');
        info.querySelector('h4').textContent = title;
        info.querySelector('p').textContent = description;
        
        // 移除点击事件
        item.removeEventListener('click', arguments.callee);
    }
}

// 工具函数：添加实际下载链接
function addRealDownload(downloadIndex, downloadUrl, filename) {
    const downloadItems = document.querySelectorAll('.download-item');
    if (downloadIndex < downloadItems.length) {
        const btn = downloadItems[downloadIndex].querySelector('.btn');
        btn.href = downloadUrl;
        btn.download = filename;
        
        // 移除占位符点击事件
        btn.removeEventListener('click', arguments.callee);
    }
}

// 使用示例（注释掉，供参考）
/*
// 添加实际图片
addRealImage(0, 'path/to/image1.jpg', '实验结果图1', '这是实验结果的详细描述');
addRealImage(1, 'path/to/image2.jpg', '实验结果图2', '这是实验结果的详细描述');

// 添加实际视频
addRealVideo(0, 'path/to/video1.mp4', '实验演示视频', '视频展示了实验的完整过程', 'path/to/thumbnail1.jpg');

// 添加实际下载链接
addRealDownload(0, 'path/to/paper.pdf', 'research-paper.pdf');
addRealDownload(1, 'path/to/supplementary.zip', 'supplementary-materials.zip');
*/

