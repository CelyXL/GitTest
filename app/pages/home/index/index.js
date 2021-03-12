"use strict";
Page({
    data: {
        btnList: [
            {
                text: '就医绿道',
                icon: '/app/static/icon/home_btn_1.png'
            },
            {
                text: '就医陪护',
                icon: '/app/static/icon/home_btn_2.png'
            },
            {
                text: '营养咨询',
                icon: '/app/static/icon/home_btn_3.png'
            },
            {
                text: '健康检测',
                icon: '/app/static/icon/home_btn_4.png'
            },
            {
                text: '在线问诊',
                icon: '/app/static/icon/home_btn_5.png'
            },
            {
                text: '二次诊疗',
                icon: '/app/static/icon/home_btn_6.png'
            },
            {
                text: '海外医疗',
                icon: '/app/static/icon/home_btn_7.png'
            },
            {
                text: '心理咨询',
                icon: '/app/static/icon/home_btn_8.png'
            },
        ],
        mallImg: [
            '/app/static/home_img_6.png',
            '/app/static/home_img_7.png',
            '/app/static/home_img_8.png',
            '/app/static/home_img_9.png',
        ],
        isLogin:true
    },
    onLoad: function () {
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function (opts) {
        console.log(opts.target);
        return {};
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFDO1lBQ047Z0JBQ0UsSUFBSSxFQUFDLE1BQU07Z0JBQ1gsSUFBSSxFQUFDLDZCQUE2QjthQUNuQztZQUNEO2dCQUNFLElBQUksRUFBQyxNQUFNO2dCQUNYLElBQUksRUFBQyw2QkFBNkI7YUFDbkM7WUFDRDtnQkFDRSxJQUFJLEVBQUMsTUFBTTtnQkFDWCxJQUFJLEVBQUMsNkJBQTZCO2FBQ25DO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFDLE1BQU07Z0JBQ1gsSUFBSSxFQUFDLDZCQUE2QjthQUNuQztZQUNEO2dCQUNFLElBQUksRUFBQyxNQUFNO2dCQUNYLElBQUksRUFBQyw2QkFBNkI7YUFDbkM7WUFDRDtnQkFDRSxJQUFJLEVBQUMsTUFBTTtnQkFDWCxJQUFJLEVBQUMsNkJBQTZCO2FBQ25DO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFDLE1BQU07Z0JBQ1gsSUFBSSxFQUFDLDZCQUE2QjthQUNuQztZQUNEO2dCQUNFLElBQUksRUFBQyxNQUFNO2dCQUNYLElBQUksRUFBQyw2QkFBNkI7YUFDbkM7U0FDRjtRQUNELE9BQU8sRUFBQztZQUNOLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFDeEIsd0JBQXdCO1lBQ3hCLHdCQUF3QjtTQUN6QjtLQUNGO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUIsRUFBakIsVUFBa0IsSUFBUTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QixPQUFPLEVBQUUsQ0FBQTtJQUNYLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJQYWdlKHtcclxuXHJcbiAgLyoqXHJcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXHJcbiAgICovXHJcbiAgZGF0YToge1xyXG4gICAgYnRuTGlzdDpbXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiflsLHljLvnu7/pgZMnLFxyXG4gICAgICAgIGljb246Jy9zdGF0aWMvaWNvbi9ob21lX2J0bl8xLnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6J+WwseWMu+mZquaKpCcsXHJcbiAgICAgICAgaWNvbjonL3N0YXRpYy9pY29uL2hvbWVfYnRuXzIucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDon6JCl5YW75ZKo6K+iJyxcclxuICAgICAgICBpY29uOicvc3RhdGljL2ljb24vaG9tZV9idG5fMy5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiflgaXlurfmo4DmtYsnLFxyXG4gICAgICAgIGljb246Jy9zdGF0aWMvaWNvbi9ob21lX2J0bl80LnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6J+WcqOe6v+mXruiviicsXHJcbiAgICAgICAgaWNvbjonL3N0YXRpYy9pY29uL2hvbWVfYnRuXzUucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDon5LqM5qyh6K+K55aXJyxcclxuICAgICAgICBpY29uOicvc3RhdGljL2ljb24vaG9tZV9idG5fNi5wbmcnXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OifmtbflpJbljLvnlpcnLFxyXG4gICAgICAgIGljb246Jy9zdGF0aWMvaWNvbi9ob21lX2J0bl83LnBuZydcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6J+W/g+eQhuWSqOivoicsXHJcbiAgICAgICAgaWNvbjonL3N0YXRpYy9pY29uL2hvbWVfYnRuXzgucG5nJ1xyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICAgIG1hbGxJbWc6W1xyXG4gICAgICAnL3N0YXRpYy9ob21lX2ltZ182LnBuZycsXHJcbiAgICAgICcvc3RhdGljL2hvbWVfaW1nXzcucG5nJyxcclxuICAgICAgJy9zdGF0aWMvaG9tZV9pbWdfOC5wbmcnLFxyXG4gICAgICAnL3N0YXRpYy9ob21lX2ltZ185LnBuZycsXHJcbiAgICBdXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cclxuICAgKi9cclxuICBvbkxvYWQoKSB7XHJcbiAgICBcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxyXG4gICAqL1xyXG4gIG9uUmVhZHkoKSB7XHJcbiAgICBcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxyXG4gICAqL1xyXG4gIG9uU2hvdygpIHtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXHJcbiAgICovXHJcbiAgb25IaWRlKCkge1xyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cclxuICAgKi9cclxuICBvblVubG9hZCgpIHtcclxuICAgIFxyXG4gIH0sXHJcblxyXG4gIC8qKlxyXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXHJcbiAgICovXHJcbiAgb25QdWxsRG93blJlZnJlc2goKSB7XHJcbiAgICBcclxuICB9LFxyXG5cclxuICAvKipcclxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcclxuICAgKi9cclxuICBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgXHJcbiAgfSxcclxuXHJcbiAgLyoqXHJcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXHJcbiAgICovXHJcbiAgb25TaGFyZUFwcE1lc3NhZ2Uob3B0czphbnkpOiBXZWNoYXRNaW5pcHJvZ3JhbS5QYWdlLklDdXN0b21TaGFyZUNvbnRlbnQge1xyXG4gICAgY29uc29sZS5sb2cob3B0cy50YXJnZXQpXHJcbiAgICByZXR1cm4ge31cclxuICB9XHJcbn0pIl19